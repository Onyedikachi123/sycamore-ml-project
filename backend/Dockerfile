FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install build essentials for some ML libraries if needed (usually slim includes enough, but shap/xgboost might need libgomp1)
RUN apt-get update && apt-get install -y libgomp1

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
