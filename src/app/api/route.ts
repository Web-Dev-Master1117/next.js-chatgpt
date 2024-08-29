import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";

import { openai } from "@/lib/openai";

const generateSystemPrompt = (): ChatCompletionMessageParam => {
  const content = `You are a chat bot and will interact with a user. Be cordial and reply their messages using markdown syntax if needed. If markdown is a code block, specify the programming language accordingly.`;

  return { role: "system", content };
};

export async function POST(request: Request) {
  const body = await request.json();
  const bodySchema = z.object({
    prompt: z.string(),
  });

  const { prompt } = bodySchema.parse(body);

  const systemPrompt = generateSystemPrompt();

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.5,
      messages: [systemPrompt, { role: "user", content: prompt }],
      stream: true,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("error", error);
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
