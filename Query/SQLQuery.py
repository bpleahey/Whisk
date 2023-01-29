import sqlite3
from abc import ABC, abstractmethod

class Query:
    """A class that represents a SQL query"""

    def __init__(self, connection: sqlite3.Connection, to_fetch: int = 1):
        self.connection = sqlite3.connect(".data/recipes.db")
        self.cursor = self.connection.cursor()
        self.to_fetch = to_fetch
    
    cursor : sqlite3.Cursor # The cursor
    connection : sqlite3.Connection # The database connection
    to_fetch : int # The number of rows to fetch

    @abstractmethod
    def get_query(self) -> str:
        """Returns the query string"""
        pass

    def execute(self, db: sqlite3.Connection) -> list:
        """Executes the query on the given database connection"""
        self.cursor.execute(self.get_query())
        fetch = self.cursor.fetchmany(self.to_fetch)
        return fetch