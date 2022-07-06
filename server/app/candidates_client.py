import requests


class GetCandidatesError(Exception):
    pass


class CandidatesClient:
    url = 'https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122'

    def get_candidates(self):
        response = requests.get(self.url)
        if not response.ok:
            raise GetCandidatesError(response.text)
        return response.json()
