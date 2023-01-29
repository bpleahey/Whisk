from SQLQuery import Query

class TimeQuery(Query):
    def __init__(self, lowerlim: int, upperlim : int):
        self.lowerlim = lowerlim
        self.upperlim = upperlim
    
    lowerlim : int # The lower range of time to search for
    upperlim : int # The upper range of time to search for

    def get_query(self) -> str:
        return f"SELECT * FROM personalizedtable WHERE time BETWEEN {self.lowerlim} AND {self.upperlim}"
    
    def create_lists(self) -> None:
        query = self.get_query()
        for row in self.cursor.execute(query):
            