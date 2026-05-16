import connectDB from "@/lib/db";
import Journal from "@/models/Journal";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const resolvedParams = await params;
    const id = resolvedParams.id;

    const journal = await Journal.findById(id);

    return Response.json({
      title: journal.title || "",
      summary: journal.summary || "",
    });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch journal",
        error: error.message,
      },
      { status: 500 }
    );
  }
}