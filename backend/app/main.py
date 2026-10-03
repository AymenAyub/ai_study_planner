from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "AI Study Planner API is running"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}