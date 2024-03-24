namespace BookShop.app;
using { managed } from '@sap/cds/common';

entity Books : managed {
    Key ID : Integer;
    title : String(100);
    descr : String(1000);
    stock : Integer;
    price : Decimal;
    image : LargeBinary;
    author : Association to Authors;
}

entity Authors : managed {
    key ID : Integer;
    name : String(100);
    dateOfBirth : Date;
    dateOfDeath : Date;
    placeOfBirth : String;
    placeOfDeath : String;
    books : Association to many Books on books.author = $self;
}