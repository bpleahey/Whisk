from SQLQuery import Query
import csv
import numpy as np


class TimeQuery(Query):
    def __init__(self, lowerlim: int, upperlim : int):
        super().__init__()
        self.lowerlim = lowerlim
        self.upperlim = upperlim
    
    lowerlim : int # The lower range of time to search for
    upperlim : int # The upper range of time to search for

    def get_query(self, field: str) -> str:
        return f'INSERT INTO outtable ({field}) SELECT "{field}" FROM personalizedtable WHERE minutes BETWEEN ({self.lowerlim}) AND ({self.upperlim})'
    
    def create_lists(self) -> None:
        self.cursor.execute(f"DROP TABLE IF EXISTS outtable;")
        self.create_table('outtable', ['name', 'minutes', 'steps', 'ingredients'], ['text', 'int', 'text', 'text'])
        self.cursor.execute(self.get_query("name"))
        self.cursor.execute(self.get_query("minutes"))
        self.cursor.execute(self.get_query("steps"))
        self.cursor.execute(self.get_query("ingredients"))
        print("executed")

        self.cursor.execute(f'SELECT * FROM outtable')
        with open("out.csv", 'w',newline='') as csv_file: 
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow([i[0] for i in self.cursor.description]) 
            csv_writer.writerows(self.cursor)
        self.connection.close()

        
            