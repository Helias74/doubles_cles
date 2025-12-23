from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Fichier SQLite
SQLALCHEMY_DATABASE_URL = "sqlite:///./reservations.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Modèle SQL pour la table Reservation
class ReservationDB(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    prenom = Column(String, nullable=False)
    email = Column(String, nullable=False)
    telephone = Column(String, nullable=False)
    date = Column(String, nullable=False)
    lieu = Column(String, nullable=False)
    motif = Column(String, nullable=False)

# Crée la table si elle n'existe pas
Base.metadata.create_all(bind=engine)