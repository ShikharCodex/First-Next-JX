import connectDB from "@/lib/db";
import Journal from "@/models/Journal";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, summary } = body;

    const newJournal = await Journal.create({
      title,
      summary,
    });

    return Response.json(
      {
        message: "Journal entry saved successfully",
        data: newJournal,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Failed to save journal entry",
        error: error.message,
      },
      { status: 500 }
    );
  }
}