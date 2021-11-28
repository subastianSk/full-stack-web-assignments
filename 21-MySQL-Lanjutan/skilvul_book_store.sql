-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE skilvulbookstore;


-- Create Table Penerbit --
 CREATE TABLE penerbit( 
     id int not null auto_increment, 
     nama varchar(50), kota varchar(50), 
     constraint pk_penerbit primary key (id) 
     );

-- Show Tables --
show tables;

-- Create Table Penulis --
CREATE TABLE penulis( 
    id int not null auto_increment, 
    nama varchar(50), kota varchar(50), 
    constraint pk_penulis primary key (id) 
    );

-- Create Table buku --
CREATE TABLE buku( 
    id int not null auto_increment, 
    ISBN varchar(50), 
    judul varchar(50), 
    harga int, 
    stock int, 
    penulis int, 
    penerbit int, 
    foreign key (penulis) references penulis(id),  
    foreign key (penerbit) references penerbit(id) ,
    constraint pk_buku primary key (id) );


-- Insert Data Penulis --
INSERT INTO `penulis` (`id`, `nama`, `kota`) VALUES 
    (NULL, 'dwi', 'yogja'), 
    (NULL, 'wibi', 'purwakarta'),
    (NULL, 'putri', 'purwakarta'),(NULL, 'riani', 'riau'), 
    (NULL,'diar', 'jakarta'), 
    (NULL, 'qimore', 'jakarta');

-- Insert Data Penerbit --
INSERT INTO `penerbit` (`id`, `nama`, `kota`) VALUES 
    (NULL, 'pajerro', 'yogja'), 
    (NULL, 'wibi', 'purwakarta'), 
    (NULL, 'devi', 'bandung'), 
    (NULL, 'tsania', 'bandung'), 
    (NULL, 'frensi', 'bali'), 
    (NULL, 'anya', 'yogja'), 
    (NULL, 'rahmat', 'karawang'), 
    (NULL, 'faskhael', 'depok'), 
    (NULL, 'efri', 'tangerang'), 
    (NULL, 'anggie', 'kalimantan');

-- Insert Data 
INSERT INTO `buku` (`id`, `ISBN`, `judul`, `harga`, `stock`, `penulis`, `penerbit`) VALUES 
    (NULL, '978-1-891830-85-3', 'American Elf (Book 2)', '299250', '100', '5', '10'), 
    (NULL, '978-1-60309-016-2', 'American Elf (Book 3)', '299250', '100', '5', '6'), 
    (NULL, '978-1-60309-265-4', 'American Elf (Book 4)', '299250', '100', '5', '10'), 
    (NULL, '978-1-60309-077-3', 'Any Empire', '299250', '300', '1', '9'), 
    (NULL, '978-1-60309-369-9', 'Apocrypha Now', '299850', '10', '3', '2'), 
    (NULL, '978-1-60309-026-1', 'Bacchus (Omnibus Edition): Volume One', '599850', '20', '4', '4'), 
    (NULL, '978-1-60309-027-8', 'Bacchus (Omnibus Edition): Volume Two', '599850', '20', '4', '4'),
    (NULL, '978-1-60309-405-4', 'Bacchus (Omnibus Edition): NEED & NUMBERED HC', '1125000', '10', '4', '5'),
    (NULL, '978-1-60309-442-9', 'Belzebubs', '224850', '30', '6', '6'), 
    (NULL, '978-1-60309-432-0', 'Bodycount', '449850', '20', '6', '8'), 
    (NULL, '978-1-60309-478-8', 'Bionic', '299850', '30', '6', '7'), 
    (NULL, '978-1-60309-479-5', 'The Book Tour', '374850', '80', '1', '1'), 
    (NULL, '978-1-60309-420-7', 'Bottled', '299850', '70', '1', '2'), 
    (NULL, '978-1-60309-449-8', 'Box (Book One)', '149850', '60', '2','1'), 
    (NULL, '978-1-60309-460-3', 'British Ice', '224850', '50', '2', '2'), 
    (NULL, '978-1-60309-465-8', 'Camp Spirit', '299850', '50', '3', '1'), 
    (NULL, '978-1-60309-422-1', 'Cat\'n\'Bat', '149850', '40', '4', '1'), 
    (NULL, '978-1-60309-066-7', 'Chester 5000 (Book 1)', '224250', '50', '5', '5'), 
    (NULL, '978-1-60309-387-3', 'Eddie Omnibox: The Complete ALEC and BACCHUS', '1499850', '50', '6', '1')
    (NULL, '978-1-60309-412-2', 'Home Time: Under the River', '374850', '9', '5', '10'), 
    (NULL, '978-1-60309-464-1', 'Home Time II: Beyond The Weaving', '449850', '7', '1', '9');

-- Find Inner Join in Table --
SELECT * FROM `buku` INNER JOIN penerbit ON buku.id = penerbit.id;

-- Find Left Join in Table --
SELECT buku.judul, penerbit.id FROM `buku` LEFT JOIN penerbit ON buku.id = penerbit.id ORDER BY buku.judul;

-- Find Right Join in Table --
SELECT buku.judul, penerbit.id FROM `buku` RIGHT JOIN penerbit ON buku.id = penerbit.id ORDER BY buku.judul;

-- Find MAX in Table--
SELECT MAX(harga) AS Jumlah FROM buku WHERE stock <10;

-- Find MIN in Table --
SELECT MIN(harga) AS Jumlah FROM buku;

-- Find COUNT in Table --
SELECT COUNT(harga) FROM buku WHERE harga < 100000;
