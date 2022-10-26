-- insert value
INSERT INTO FlatSharing(Id_FlatSharing, FlatSharing_Name, Address, City, State, Zipcode) VALUES ('1', 'Irvine Flatsharing', '66 Peppermint Tree', 'Irvine', 'California', '92618');

INSERT INTO users(Id_User,username, Firstname, Lastname) VALUES (1,'emerick_944', 'Emerick', 'Szonyi');
INSERT INTO users(Id_User,username, Firstname, Lastname) VALUES (2,'danny-grn', 'Danny', 'Graine');

INSERT INTO Chore_Category(Id_Chore_Category, Name_Category, Priority, Difficulty) VALUES ('1', 'Kitchen', 'Medium', 'Easy');

INSERT INTO Chore(Id_Chore, Chore_Name, Chore_Description, Chore_Deadline, Id_Chore_Category) VALUES ('4', 'Clean the dishes', 'Clean all the dishes and turn on the dishwasher if necessary', '2022-10-17', '1');

