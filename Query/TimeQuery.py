from SQLQuery import Query

class TimeQuery(Query):
    def __init__(self, lowerlim: int, upperlim : int):
        self.lowerlim = lowerlim
        self.upperlim = upperlim
    
    lowerlim : int # The lower range of time to search for
    upperlim : int # The upper range of time to search for

    def get_query(self) -> str:
        return f"SELECT * FROM recipes WHERE time BETWEEN {self.lowerlim} AND {self.upperlim}"