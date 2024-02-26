import client from "../utility/contenful"
import { Request,Response } from "express"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

async function userInfo(req:Request,res:Response) {
    return res.json({ success:true,message:'user info from user services' })
}

async function getContentFulData(req:Request,res:Response) {
    const { entryId } = req.params;
    client.getEntries(entryId)
    .then((entry) => {
        console.log(entry)
        const rawRichTextField = entry.fields.body;
        return rawRichTextField;
    })
    .then((renderedHtml) => {
        console.log(renderedHtml);
    })
    .catch((error) => {
        console.log(error)
    })
}

export { userInfo, getContentFulData }