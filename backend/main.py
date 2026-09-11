from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "CyberQuest Backend is Working!"}

    