package com.stream.app.implementation;

import com.stream.app.entities.Video;
import com.stream.app.services.VideoService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

  @Override
  public Video save(Video video, MultipartFile file) {
    return null;
  }

  @Override
  public Video get(String videoId) {
    return null;
  }

  @Override
  public Video getByTitle(String videoTitle) {
    return null;
  }

  @Override
  public List<Video> getAll() {
    return List.of();
  }
}
