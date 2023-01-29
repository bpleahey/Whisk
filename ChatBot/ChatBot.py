import langchain
from langchain.llms import OpenAI
from langchain import OpenAI, SQLDatabase, SQLDatabaseChain
from langchain.chains.sql_database.base import SQLDatabaseChain
from langchain import PromptTemplate

class ChatBot:
    """
    A chatbot that uses a language chain to generate responses.
    """

    db = SQLDatabase.from_uri("sqlite:////Users/joey/Desktop/cs/recipes.db")
    llm = OpenAI(temperature=0, openai_api_key="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")

    db_chain = SQLDatabaseChain(llm=llm, database=db, verbose=True)

    #prompts and commands and outputs
    #if input for time and ingreds
    ingreds = ''
    times = ''
    prompt = PromptTemplate(input_variables=["ingredients", "times"], template="Give me 3 recipes with minutes between {times} and with these ingredients: {ingredients}. Print them seperated by commas and don't print anything else.")
    prompt.format(ingredients=ingreds, times=times)
    output = db_chain.run(prompt)
    #random
    excluded = ''
    r_prompt = PromptTemplate(input_variables=["excluded"], template="Give me 3 random recipes that are not {excluded}. Print them seperated by commas and don't print anything else.")
    r_prompt.format(excluded=excluded)
    output = db_chain.run(r_prompt)


    