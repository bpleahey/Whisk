from SQLQuery import Query
import csv
import numpy as np


class TimeQuery(Query):
    def __init__(self, lowerlim: int, upperlim : int):
        self.lowerlim = lowerlim
        self.upperlim = upperlim
    
    lowerlim : int # The lower range of time to search for
    upperlim : int # The upper range of time to search for

    def get_query(self) -> str:
        return f"SELECT * FROM personalizedtable WHERE time BETWEEN {self.lowerlim} AND {self.upperlim}"
    
    def create_lists(self) -> None:
        self.cursor.execute(self.get_query())
        with open("out.csv", 'w',newline='') as csv_file: 
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow([i[0] for i in self.cursor.description]) 
            csv_writer.writerows(self.cursor)
        self.connection.close()

        
            