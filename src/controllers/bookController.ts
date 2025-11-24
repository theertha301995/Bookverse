import {Request,Response} from "express";
import book from "../models/book.js";
import user from "../models/user.js";


export const createBook = async(req:Request, res:Response)=>{
    try{
        const { title, description, tags, category, coverImage, status } = req.body;
        const newBook= await book.create({
            title,
      description,
      tags,
      category,
      coverImage,
      status,
      author: req.user!.id
        });
        res.status(200).json(
            {
                message:"book created successfully",
                book,
          }
        );
        
    }catch(err:any)
    {
        res.status(500).json({error:err.message});
    }
};
export const getAllBooks=async(req:Request,res:Response)=>
    {

        try{
    const books= await book.populate("author","name email");
    res.json(books);

}catch(err:any)
{
    res.status(500).json({error:err.message});
}
    }
    export const getBookById = async (req: Request, res: Response) => {
  try {
    const books = await book.findById(req.params.id).populate(
      "author",
      "name email"
    );

    if (!books) return res.status(404).json({ error: "Book not found" });

    res.json(books);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBook= async(req:Request,res:Response)=>
{
    try{
        const books= await book.findById(req.params.id);
        
    if (!books) return res.status(404).json({ error: "Book not found" });

    // Ensure only the author can update their book
    if (books.author.toString() !== req.user!.id) {
      return res.status(403).json({ error: "Unauthorized: Not your book" });
    }
    Object.assign(books,req.body);
    await books.save();
    res.json({
      message: "Book updated successfully",
      book,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const books = await book.findById(req.params.id);

    if (!books) return res.status(404).json({ error: "Book not found" });

    if (books.author.toString() !== req.user!.id) {
      return res.status(403).json({ error: "Unauthorized: Not your book" });
    }

    await books.deleteOne();
    res.json({ message: "Book deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getBooksByAuthor = async (req: Request, res: Response) => {
  try {
    const books = await book.find({ author: req.params.authorId });
    res.json(books);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};