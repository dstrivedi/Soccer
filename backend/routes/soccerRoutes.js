import { addNewPlayer, getPlayers, getPlayerById } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    //GET Player by id endpoint
        .get(getPlayerById);
}

export default routes;
