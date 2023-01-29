from SQLQuery import Query
import sqlite3

class IngredientQuery(Query):
    def __init__(self, ingredientlist: list[str]):
        super().__init__()
        self.ingredientlist = ingredientlist
    
    ingredientlist : list[str] # The list of ingredients to search for
    
    #use this to get the query
    #WHERE CustomerName LIKE '%or%'

    def create_ing_table(self):
        self.create_table("ingredientlist", ["ingredient"], ["text"])
        for i in self.ingredientlist:
            self.cursor.execute(f"INSERT INTO ingredientlist Values ('{i}')")
        self.commit()

    def get_query(self) -> str:
        self.create_ing_table()
        #TODO: make query only select recipes that have all the ingredients
        
        query = """INSERT INTO personalizedtable
            SELECT * FROM RAW_recipes WHERE id IN (SELECT id FROM ingredientlist)"""

        return """INSERT INTO personalizedtable
            SELECT * FROM RAW_recipes WHERE id IN
            (SELECT id FROM ingredientlist WHERE ingredient IN (SELECT
            ingredient FROM ingredientlist))"""

    def create_personalized_table(self) -> None:
        query = self.get_query()
        self.create_table("personalizedtable",["name","id","minutes",
            "contributor_id","submitted","tags","nutrition","n_steps","steps",
            "description","ingredients","n_ingredients"], ["text", "int",
            "int", "int", "text", "text", "text", "int",
            "text", "text", "text", "int"])
        self.cursor.execute(query)
        self.commit()