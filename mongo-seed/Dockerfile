FROM mongo
COPY user.json /user.json
CMD mongoimport --host mongo --db careforme --collection user --type json --file /user.json --jsonArray
COPY campaign.json /campaign.json
CMD mongoimport --host mongo --db careforme --collection campaign --type json --file /campaign.json --jsonArray
COPY update.json /update.json
CMD mongoimport --host mongo --db careforme --collection update --type json --file /update.json --jsonArray
COPY donation.json /donation.json
CMD mongoimport --host mongo --db careforme --collection donation --type json --file /donation.json --jsonArray