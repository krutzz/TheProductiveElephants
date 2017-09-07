export class Post {

    // tslint:disable-next-line:max-line-length
    private defaultImg = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/default.png?alt=media&token=c753755a-91f0-4f9d-95df-3dbe55ea7bb0';
    public $key: string;
    public title: string;
    public description: string;
    public images: string[];
    public date: string;
    public category: string;
    public price: string;
    public province: string;

    public seen: number;
    public user;
    constructor(
        {
           $key,
            title,
            description,
            images,
            date,
            category,
            price,
            province,
            seen,
            user
        }) {
        this.$key = $key;
        this.title = title;
        this.description = description;
        this.images = images;
        this.date = date;
        this.category = category;
        this.price = price;
        this.province = province;
        this.seen = seen;
        this.user = user;
    }


    get img() {
        if (!this.images || this.images.length === 0) {
            return this.defaultImg;
        }

        return this.images[0];
    }
}
