import sqlite3
from abc import ABC, abstractmethod

class Query:
    """A class that represents a SQL query"""

    def __init__(self, connection: sqlite3.Connection):
        self.connection = sqlite3.connect(".data/recipes.db")
        self.cursor = self.connection.cursor()

    @abstractmethod
    def get_query(self) -> str:
        """Returns the query string"""
        pass

    query : str # The query string
    cursor : sqlite3.Cursor # The cursor

    connection : sqlite3.Connection # The database connection

    def execute(self, db: sqlite3.Connection) -> sqlite3.Cursor:
        """Executes the query on the given database connection"""
        return db.execute(self.get_query())