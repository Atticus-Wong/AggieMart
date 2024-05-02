-- Create a new table called '[TableName]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[listings]', 'U') IS NOT NULL
DROP TABLE [dbo].[listings]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[listings]
(
    [list_id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
    [name] NVARCHAR(50) NOT NULL,
    [price] FLOAT NOT NULL,
    [location] NVARCHAR(30) NOT NULL,
    [user_id] int FOREIGN KEY REFERENCES accounts(id)
    -- Specify more columns here
);
GO