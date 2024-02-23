import { Request , Response } from 'express'
async function commonOne(req:Request,res:Response) {
    return res.json({ success:true,message:'common one services' })
}

async function commonTwo(req:Request,res:Response) {
    return res.json({succes:true,message:'common two serveices'});
}

export { commonOne,commonTwo }