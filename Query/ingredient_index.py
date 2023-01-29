import sqlite3

connection = sqlite3.connect("csv_parse/recipes.db")
cursor = connection.cursor()

sql_command = """CREATE TABLE user_ingredients(
    Ingredient varchar(420));"""
cursor.execute(sql_command)