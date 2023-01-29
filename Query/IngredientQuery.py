from SQLQuery import Query

class IngredientQuery(Query):
    def __init__(self, ingredientlist: list[str]):
        self.ingredientlist = ingredientlist

        #
    
    ingredientlist : list[str] # The list of ingredients to search for
    
    #use this to get the query
    #WHERE CustomerName LIKE '%or%'

    def get_query(self) -> str:
        return f"SELECT * FROM recipes WHERE ingredients LIKE '%{self.ingredient}%'"