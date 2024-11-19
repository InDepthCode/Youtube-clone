package com.stream.app.controller;

import com.stream.app.entities.Video;
import com.stream.app.payload.CustomMessage;
import com.stream.app.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
  public ResponseEntity<?> create(@RequestParam("file") MultipartFile file,
                                  @RequestParam("title") String title,
                                  @RequestParam("description") String description) {
    try {
      // Create a new Video object and set its properties
      Video video = new Video();
      video.setTitle(title);
      video.setDescription(description);
      video.setVideoId(UUID.randomUUID().toString());

      // Save the video using the service
      Video savedVideo = videoService.save(video, file);

      // Check if the video was saved successfully
      if (savedVideo != null) {
        return ResponseEntity.status(HttpStatus.OK).body(savedVideo);
      } else {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(CustomMessage.builder()
                .message("Video Not Uploaded")
                .success(false)
                .build());
      }
    } catch (Exception e) {
      // Handle exceptions and return a proper error response
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(CustomMessage.builder()
              .message("An error occurred while uploading the video: " + e.getMessage())
              .success(false)
              .build());
    }
  }
}
