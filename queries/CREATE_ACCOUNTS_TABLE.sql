-- Create a new table called '[accounts]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[accounts]', 'U') IS NOT NULL
DROP TABLE [dbo].[accounts]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[accounts]
(
    [id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
    [first_name] NVARCHAR(50) NOT NULL,
    [last_name] NVARCHAR(50) NOT NULL,
    [email] NVARCHAR(30),
    [phone_number] NVARCHAR(10) NOT NULL,
    [location] NVARCHAR(20),
    [password] NVARCHAR(30) NOT NULL

    -- Specify more columns here
);
GO

SELECT * FROM accounts;