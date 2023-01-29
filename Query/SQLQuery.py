import sqlite3
from abc import ABC, abstractmethod

class Query:
    """A class that represents a SQL query"""

    def __init__(self, to_fetch: int = 1):
        self.connection = sqlite3.connect("/Users/joey/Desktop/cs/hack-brown2023/csv_parse/recipes.db")
        self.cursor = self.connection.cursor()
        self.to_fetch = to_fetch
    
    cursor : sqlite3.Cursor # The cursor
    connection : sqlite3.Connection # The database connection
    to_fetch : int # The number of rows to fetch

    @abstractmethod
    def get_query(self) -> str:
        """Returns the query string"""
        pass

    def execute(self) -> list:
        """Executes the query on the given database connection"""
        return self.cursor.execute(self.get_query())
        #fetch = self.cursor.fetchmany(self.to_fetch)
        #return fetch

    def commit(self):
        """Commits the changes to the database"""
        self.connection.commit()
    

    def close(self):
        """Closes the connection"""
        self.connection.close()
    
    def create_table(self, name: str, col_names: list[str], col_types: list[str]):
        self.cursor.execute(f"DROP TABLE IF EXISTS {name};")
        sql_command = f"""
        CREATE TABLE {name} (
            {col_names[0]} {col_types[0]}"""

        for i in range(1, len(col_names)):
            sql_command += f", {col_names[i]} {col_types[i]}"
        sql_command += ")"
        self.cursor.execute(sql_command)

    #def create_possible_recipe_table(self):
        