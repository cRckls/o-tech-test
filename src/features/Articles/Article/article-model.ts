export interface ArticleModel {
    id: string;
    created_at: string;
    title: string;
    description: string;
    images:Array<
      {
        files: {
          medium:string;
        }
      }>;
    location:{
      country:string;
      town:string;
    };
    user:{
      first_name:string;
    };
    isOpen:boolean;
    isRead:boolean;
  }
