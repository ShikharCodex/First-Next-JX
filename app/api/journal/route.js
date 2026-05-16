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
export async function DELETE(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    await Journal.findByIdAndDelete(id);

    return Response.json(
      {
        message: "Journal deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Failed to delete journal",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { id, title, summary } = body;

    await Journal.findByIdAndUpdate(id, {
      title,
      summary,
    });

    return Response.json(
      {
        message: "Journal updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Failed to update journal",
        error: error.message,
      },
      { status: 500 }
    );
  }
}