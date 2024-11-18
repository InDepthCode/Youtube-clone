package com.stream.app.controller;

import com.stream.app.entities.Video;
import com.stream.app.payload.CustomMessage;
import com.stream.app.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/videos")
public class VideoController {
  @Autowired
  private VideoService videoService;

  @PostMapping
  public ResponseEntity<CustomMessage> create(@RequestParam("file") MultipartFile file,
                                              @RequestParam("title") String title,
                                              @RequestParam("description") String description) {
    Video video = new Video();
    video.setTitle(title);
    video.setDescription(description);
    video.setVideoId(UUID.randomUUID().toString());
    videoService.save(video, file);
    return null;
  }
}
