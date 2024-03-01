import * as Express from 'express';
import fs from 'fs';
import Mustache = require('mustache');

/**
 * Controller to gene
 */

export class TemplateController {
  public generateTemplate = async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) => {
    // const data = req.body;
    fs.readFile('src/templates/order-confirmation.html', function (err, html) {
      if (err) {
        next(err);
      }
      const dyanamic_data = {
        first_name: 'Ramesh',
        order: {
          order_id: 'xyz00001',
          items: {
            title: 'tshit',
            quantity: 2,
            price: 200,
          },
          subtotal: {
            price: 400,
          },
          shipping: {
            price: 50,
          },
          total: {
            price: 450,
          },
        },
        billing_address: 'D 203, Baprola New Delhi 110042',
        shipping_address: 'C -203 Tuda Mandi Najafgarh New Delhi',
        company_name: 'Buzzclan info pvt. ltd',
        company_address: 'Chandigarh New Delhi',
        unsub_link: 'https://xyx.com/unsubsribe',
      };

      const output = Mustache.render(`${html}`, dyanamic_data);
      res.send(output);
    });
  };
}
