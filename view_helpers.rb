module ViewHelpers

  # yaml data
  def data
    d||=YAML.load_file(File.join(File.dirname(__FILE__), 'data.yml'))
    return d
  end

  # nav li active link
  def nav_link_to(name, href, options={})
    here = request.path.gsub('index.html', '')
    if href == here
      active = "active"
    end
    content_tag(:li, link_to(name, href, :class => active) )
  end
end
