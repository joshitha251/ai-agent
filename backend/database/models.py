from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime

from database.database import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String, nullable=True)

    website = Column(String, nullable=True)

    lead_score = Column(Integer)

    summary = Column(Text)

    pain_points = Column(Text)

    automation_opportunities = Column(Text)

    estimated_monthly_savings = Column(String)

    priority = Column(String)

    status = Column(String, default="NEW")

    created_at = Column(DateTime, default=datetime.utcnow)