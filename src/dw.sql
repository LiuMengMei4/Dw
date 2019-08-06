SET NAMES UTF8;
DROP DATABASE IF EXISTS dw;
CREATE DATABASE dw CHARSET=UTF8;
USE dw;
/*用户表*/
CREATE TABLE user_list(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname  VARCHAR(12),
    tell  INT,
    gender BOOLEAN
);
INSERT  INTO user_list VALUES 
    (null,'张三',17780830343,0),
    (null,'小翠',17781515343,1);
/*订单表*/


/*产品表*/
/*手表*/
CREATE TABLE product(
    pid INT PRIMARY KEY,##产品id  10  CLASSIC PETITE，20
    product_name VARCHAR(20),    ##产品系列分类
    sex BOOLEAN,                 #产品分类 男士表（1）/女士表（0）  
    dial_size INT,           #表带尺寸
    price INT,                   #价格
    dial_material VARCHAR(10),   #表带材质
    color VARCHAR(15),           #颜色
    dial_color varchar(15),      #表带颜色
    waterproof_grade VARCHAR(10),#防水等级
    lover BOOLEAN,               #是否为情侣手表  1情侣表  2，不是
    replace_watchband BOOLEAN,   #是否能够更换表带   1可更换  0 不可更换
    movement varchar(12),        #机芯
    case_thickness INT
);
INSERT INTO  product VALUES 
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6),
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6),
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6),
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6),
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6),
    (null,'CLASSIC PETITE',0,28/32/36,1289,'金属','b5b4b4','蛋壳白','30米生活放水',0,1,'日本石英机芯',6);

#产品图片及描述
CREATE TABLE product