const BASE_URL = '/api/v1';

// GET application by id
async function getApplication(id) {
    try {
        const res = await fetch(`${BASE_URL}/applications/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch application: ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// POST application
async function createApplication(data) {
    try {
        const res = await fetch(`${BASE_URL}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to create application: ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// PUT application
async function updateApplication(id, data) {
    try {
        const res = await fetch(`${BASE_URL}/applications/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to update application: ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// DELETE application
async function deleteApplication(id) {
    try {
        const res = await fetch(`${BASE_URL}/applications/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error(`Failed to delete application: ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// GET applications (filters)
async function getApplications(filters) {
    try {
        let url = `${BASE_URL}/applications`;

        if (filters) {
            const query = new URLSearchParams(filters).toString();
            if (query) {
                url += `?${query}`;
            }
        }

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch applications: ${res.statusText}`);
        }
        return await res.json();

    } catch (err) {
        console.error(err);
        throw err;
    }
}

// GET notes by application
async function getNotesByApplication(applicationId) {
    try {
        const res = await fetch(`${BASE_URL}/applications/${applicationId}/notes`);

        if (!res.ok) {
            throw new Error(`Failed to fetch notes: ${res.statusText}`);
        }
        return await res.json();

    } catch (err) {
        console.error(err);
        throw err;
    }
}

// POST note
async function createNote(applicationId, data) {
    try {
        const res = await fetch(`${BASE_URL}/applications/${applicationId}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to create a new note: ${res.statusText}`);
        }
        return await res.json()
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// PUT note
async function updateNote(id, data) {
    try {
        const res = await fetch(`${BASE_URL}/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to update note: ${res.statusText}`);
        }
        return await res.json()

    } catch (err) {
        console.error(err);
        throw err;
    }
}

// DELETE note
async function deleteNote(noteId) {
    try {
        const res = await fetch(`${BASE_URL}/notes/${noteId}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error(`Failed to delete note: ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }

}

// GET study logs (filters)
async function getStudyLogs(filters) {
    try {
        let url = `${BASE_URL}/study-logs`;

        if (filters) {
            const query = new URLSearchParams(filters).toString();
            if (query) {
                url += `?${query}`;
            };
        }

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to get study logs: ${res.statusText}`);
        }

        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// POST study log
async function createStudyLog(data) {
    try {
        const res = await fetch(`${BASE_URL}/study-logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to create study log: ${res.statusText}`);
        }
        return await res.json()
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// PUT study log
async function updateStudyLog(id, data) {
    try {
        const res = await fetch(`${BASE_URL}/study-logs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Failed to update study log: ${res.statusText}`);
        }
        return await res.json()
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// DELETE study log
async function deleteStudyLog(id) {
    try {
        const res = await fetch(`${BASE_URL}/study-logs/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error(`Failed to delete study log: ${res.statusText}`);
        }
        return await res.json()
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// GET stats
async function getStats() {
    try {
        const res = await fetch(`${BASE_URL}/stats`);
        if (!res.ok) {
            throw new Error(`Failed to fetch stats: ${res.statusText}`);
        }
        return await res.json();

    } catch (err) {
        console.error(err);
        throw err;
    }
}