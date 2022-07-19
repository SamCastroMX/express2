"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = exports.deleteVideo = exports.getVideo = exports.getVideos = exports.createVideo = void 0;
const Video_1 = __importDefault(require("./Video"));
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findOne({ url: req.body.url });
    if (videoFound) {
        return res.status(301).json({ message: "Urls does exist" });
    }
    const video = new Video_1.default(req.body);
    console.log(video);
    const savedVideo = yield video.save();
    res.json(savedVideo);
});
exports.createVideo = createVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield Video_1.default.find();
        res.json(videos);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getVideos = getVideos;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findById(req.params.id);
    if (!videoFound)
        return res.status(204).json();
    res.json(videoFound);
});
exports.getVideo = getVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findByIdAndDelete(req.params.id);
    if (!videoFound)
        return res.status(204).json();
    res.json(videoFound);
});
exports.deleteVideo = deleteVideo;
const updateVideo = (req, res) => {
    res.json('getting videos');
};
exports.updateVideo = updateVideo;
