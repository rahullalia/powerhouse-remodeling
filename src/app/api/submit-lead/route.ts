import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!ghlWebhookUrl) {
      console.error("GHL_WEBHOOK_URL not configured");
      // Still return success to user, log error for debugging
      return NextResponse.json(
        { success: true, message: "Form submitted (webhook not configured)" },
        { status: 200 }
      );
    }

    // Send to GHL webhook
    const ghlResponse = await fetch(ghlWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        timeline: formData.timeline,
        zip_code: formData.zipCode,
        source: "landing_page",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!ghlResponse.ok) {
      console.error("GHL webhook failed:", await ghlResponse.text());
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Submission failed" },
      { status: 500 }
    );
  }
}
