using BookShop.app as service from '../db/schema';

service BookshopService {
    entity Books as projection on service.Books;

    entity Authors as projection on service.Authors;
}