-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE book_store;

-- Create Table --
    CREATE TABLE books
    -> (id INT AUTO_INCREMENT PRIMARY KEY,
    -> autho1 VARCHAR(100) NOT NULL,
    -> autho2 VARCHAR(100),
    -> autho3 VARCHAR(100),
    -> title VARCHAR(100),
    -> description VARCHAR(100),
    -> place_sell VARCHAR(3),
    -> stock INT DEFAULT 0,
    -> creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    -> );

-- Show Table --
SHOW tables;

-- Detail Table --
desc books;

-- Alter Table --
ALTER TABLE `books` DROP `place_sell`;

-- Insert Data --
INSERT INTO `books` (`id`, `price`, `status`, `autho1`, `autho2`, `autho3`, `title`, `description`, `stock`, `creation_date`) 
VALUES (NULL, '11', 'limited', 'santi', NULL, NULL, 'Belajar', 'Belajar terus pinter kagak wkwkkw', '100', '2021-25-09 07:04:52'), 
(NULL, '3', 'limited', 'bangkit', NULL, NULL, 'Healing', 'Healing Ajah Terus nanti juga strees lagi', '100', '2021-10-09 07:04:52'),
(NULL, '100', 'available', 'udin', NULL, NULL, 'Cinta Telah Pergi', 'Makanya jangan sering bucin jadi hilangkan', '100', '2021-10-09 07:04:52');

-- Show books mengunakan SELECT --
SELECT * FROM books;

-- Sql Aliases --
SELECT id AS ID , autho1 AS A1 , autho2 AS AS2, autho3 AS AS3 FROM `books`;

-- Find id mengunakan WHERE --
SELECT * FROM `books` WHERE id = 1;

-- Find price mengunakan AND --
SELECT * FROM books WHERE price >= 11 AND price <=11;

-- Find price mengunakan OR --
SELECT * FROM books WHERE price >= 11 OR price <=11;

-- Find price mengunakan NOT --
 SELECT * FROM books WHERE NOT price >= 11 AND price <=11;

 -- Order by ASC --
 SELECT * FROM books ORDER BY id ASC;

 -- LIMIT column --
 SELECT * FROM books LIMIT 2;

 -- Delete --
 DELETE FROM books WHERE id=1;

 -- Update --
 UPDATE  books  SET  autho1 ='maudy',
    -> price ='100000'
    -> WHERE id='1';

-- Show by id=1 --
 SELECT * FROM books WHERE id='1';