import { addNewPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    //GET specific Player by id
        .get(getPlayerById)
    //Update specific Player by id
        .put(updatePlayer)
    //Delete specific Player by id
        .delete(deletePlayer);
}

export default routes;
