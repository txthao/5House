import { Category } from "../models/search/category";

export class Constants {
  public static readonly SELL_ID = 1;
  public static readonly RENT_ID = 2;
  public static readonly TRANSFER_ID = 3;
  public static readonly DIRECTIONS_ID = 4;
  public static readonly ADDTIONAL_DIRECTIONS: Category[] =  [
    {
      id : -1,
      category_name: 'Đông Tứ Trạch',
      parent_id: null
    },
    {
      id: -2,
      category_name: 'Tây Tứ Trạch',
      parent_id: null
    }
  ];

  public static readonly SELL_MAX_PRICE = 30000;
  public static readonly RENT_MAX_PRICE = 100;
  public static readonly TRANSFER_MAX_PRICE = 400;
  
}
