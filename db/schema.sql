DROP TABLE IF EXISTS interview_notes;
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS study_logs;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    platform VARCHAR(255) NOT NULL CHECK (platform IN ('NxtWave', 'Naukri', 'LinkedIn', 'Indeed', 'Wellfound', 'Instahyre', 'Company Website', 'Referral', 'Other')),
    job_link TEXT,
    date_applied DATE NOT NULL DEFAULT CURRENT_DATE,
    status VARCHAR(30) NOT NULL DEFAULT 'Applied' CHECK (status IN ('Applied', 'Online Assessment', 'Mock Interview', 'Interview Round 1', 'Interview Round 2', 'Interview Round 3', 'Offer', 'Rejected', 'Withdrawn')),
    salary_offered VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE interview_notes(
    id SERIAL PRIMARY KEY,
    application_id INTEGER NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    round_number INTEGER NOT NULL,
    note_date DATE NOT NULL DEFAULT CURRENT_DATE,
    questions_asked TEXT NOT NULL,
    my_answers TEXT,
    to_revise TEXT,
    how_it_went TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE study_logs(
    id SERIAL PRIMARY KEY,
    log_date DATE NOT NULL DEFAULT CURRENT_DATE,
    topic VARCHAR(255) NOT NULL,
    hours_spent DECIMAL(4,1) NOT NULL CHECK (hours_spent > 0),
    what_i_learned TEXT,
    project_worked_on VARCHAR(255),
    confidence_level INTEGER CHECK (confidence_level BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
