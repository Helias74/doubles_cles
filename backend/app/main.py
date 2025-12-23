from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .db import SessionLocal, ReservationDB
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèle Pydantic
class Reservation(BaseModel):
    nom: str
    prenom: str
    email: str
    telephone: str
    date: str
    lieu: str
    motif: str

# Dépendance pour la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/reservations")
async def create_reservation(reservation: Reservation, db: Session = Depends(get_db)):
    db_reservation = ReservationDB(
        nom=reservation.nom,
        prenom=reservation.prenom,
        email=reservation.email,
        telephone=reservation.telephone,
        date=reservation.date,
        lieu=reservation.lieu,
        motif=reservation.motif
    )
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return {"message": "Réservation enregistrée avec succès", "data": {
        "id": db_reservation.id,
        "nom": db_reservation.nom,
        "prenom": db_reservation.prenom,
        "email": db_reservation.email,
        "telephone": db_reservation.telephone,
        "date": db_reservation.date,
        "lieu": db_reservation.lieu,
        "motif": db_reservation.motif
    }}