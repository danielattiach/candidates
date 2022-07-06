from app.candidates_client import CandidatesClient, GetCandidatesError


def get_candidates():
    client = CandidatesClient()
    try:
        return client.get_candidates()
    except GetCandidatesError:
        return {'error': 'Could not get candidates'}, 500
