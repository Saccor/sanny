import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return NextResponse.json({
      connected: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    connected: true,
    session: data.session || null,
  });
}
