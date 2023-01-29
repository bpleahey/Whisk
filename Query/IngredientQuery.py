from SQLQuery import Query
import sqlite3

class IngredientQuery(Query):
    def __init__(self, ingredientlist: list[str]):
        super().__init__(sqlite3.connect("/Users/BrendanLeahey/Desktop/Independent/Hacks/Hack@Brown2023/hack-brown2023/.data/recipes.db"))
        self.ingredientlist = ingredientlist
    
    ingredientlist : list[str] # The list of ingredients to search for
    
    #use this to get the query
    #WHERE CustomerName LIKE '%or%'

    def create_ing_table(self):
        self.create_table("ingredientlist", ["ingredient"], ["varchar(255)"])
        for i in self.ingredientlist:
            self.cursor.execute(f"INSERT INTO ingredientlist VALUES ('{i}')")

    def get_query(self) -> str:
        self.create_ing_table()
        return f"SELECT * FROM recipes WHERE id IN (SELECT id FROM ingredients WHERE ingredient IN (SELECT ingredient FROM ingredientlist))"

    def create_personalized_table(self, username: str):
        self.create_table(username, ["id", "name", "time", "rating", "link"], ["int", "varchar(255)", "int", "int", "varchar(255)"])