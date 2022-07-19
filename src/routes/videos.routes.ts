import {Router} from 'express';
import * as videoController from './videos.controller';

const router = Router();

router.get('/',(req,res) =>res.json("samito"))

router.get('/videos',videoController.getVideos)

router.post('/videos',videoController.createVideo)

router.get('/videos/:id',videoController.getVideo)

router.delete('/videos/:id',videoController.deleteVideo)

router.put('/videos/:id',videoController.updateVideo)

export default router;